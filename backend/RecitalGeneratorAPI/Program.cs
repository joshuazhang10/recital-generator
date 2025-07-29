using MySqlConnector;
using RecitalGeneratorAPI.Data;
using Microsoft.EntityFrameworkCore;
using DotNetEnv;

Console.WriteLine("App is running and listening...");

DotNetEnv.Env.Load("/app/.env");

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// var connectionString = builder.Configuration.GetConnectionString("ConnectionStrings")!;
var connectionString = Environment.GetEnvironmentVariable("ConnectionStrings");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));
Console.WriteLine(connectionString);
if (string.IsNullOrEmpty(connectionString))
{
    Console.WriteLine("Connection string not found.");
    return;
}

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}


// app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();