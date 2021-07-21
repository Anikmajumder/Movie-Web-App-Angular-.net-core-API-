using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;

namespace API.Filters
{
    public class MyExceptionsFilter: ExceptionFilterAttribute
    {
        private readonly ILogger<MyExceptionsFilter> logger;

        public MyExceptionsFilter(ILogger<MyExceptionsFilter> logger){
            this.logger = logger;
        }
        
        public override void OnException(ExceptionContext context){
            logger.LogError(context.Exception, context.Exception.Message);
            base.OnException(context);
        }
        
    }
}