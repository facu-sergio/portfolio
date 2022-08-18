using portfolio1.API.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace portfolio1
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Configuración y servicios de API web
            config.EnableCors();

            // Rutas de API web
            config.MapHttpAttributeRoutes();

            config.MessageHandlers.Add(new TokenValidationHandler());

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            GlobalConfiguration.Configuration.Formatters.JsonFormatter.MediaTypeMappings
              .Add(new System.Net.Http.Formatting.RequestHeaderMapping("Accept",
                          "text/html",
                          StringComparison.InvariantCultureIgnoreCase,
                          true,
                          "application/json")
              );
        }
    }
}
