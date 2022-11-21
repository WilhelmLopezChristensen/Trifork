using Trifork_project.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: "AllowAllOrigins",
        builder =>
        {
            builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
        });
});

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(swaggerGenOptions =>
{
    swaggerGenOptions.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "Trifork project", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI( swaggerUIOptions =>
    {
        swaggerUIOptions.DocumentTitle = "Trifork project";
        swaggerUIOptions.SwaggerEndpoint("/swagger/v1/swagger.json", "Trifork project v1");
        swaggerUIOptions.RoutePrefix = string.Empty;
    });
}

app.UseHttpsRedirection();

app.UseCors("AllowAllOrigins");

app.MapGet("/getPosts", async () => await Repository.GetListAsync())
    .WithTags("Posts EndPoint");

app.MapPost("/createPost", async (Inventory postToCreate) =>
{
    if (await Repository.CreatePostAsync(postToCreate))
    {
        return Results.Ok("Create successful");
    }
    return Results.BadRequest();
    
}).WithTags("Posts EndPoint");

app.MapDelete("/deletePost/{postId}", async (int postId) =>
{
    if (await Repository.DeletePostAsync(postId))
    {
        return Results.Ok("Delete successful");
    }
    return Results.BadRequest();
    
}).WithTags("Posts EndPoint");

app.Run();
