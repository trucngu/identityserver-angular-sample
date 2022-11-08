using Microsoft.IdentityModel.Tokens;

const string CORS_POLICY = "local";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(builder =>
{
    builder.AddPolicy(CORS_POLICY, policy =>
    {
        policy
            .WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services
    .AddAuthentication("Bearer")
    .AddJwtBearer(o =>
    {
        o.Authority = "https://localhost:5001";
        o.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateAudience = false
        };
    });
builder.Services
    .AddAuthorization(options =>
    {
        options.AddPolicy("ApiScope", policy =>
        {
            policy.RequireAuthenticatedUser();
            policy.RequireClaim("scope", "resource_api");
        });
    });

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(CORS_POLICY);

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers()
    .RequireAuthorization("ApiScope");

app.Run();
