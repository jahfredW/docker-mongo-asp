#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["testMongo/testMongo.csproj", "testMongo/"]
RUN dotnet restore "./testMongo/./testMongo.csproj"
COPY . .
WORKDIR "/src/testMongo"
RUN dotnet build "./testMongo.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./testMongo.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

COPY ["testMongo/certificate.pfx", "app/certificate.pfx"]

# Set the path to the SSL certificate
ENV ASPNETCORE_Kestrel__Certificates__Default__Path=/app/certificate.pfx
ENV ASPNETCORE_Kestrel__Certificates__Default__Password=Farte512!3011!



ENTRYPOINT ["dotnet", "testMongo.dll"]

