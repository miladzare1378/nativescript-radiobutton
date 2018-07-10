var application = require("application");
require("ui/styling/style-scope");
var appCssContext = require.context("~/", false, /^\.\/app\.(css|scss|less|sass)$/);
global.registerWebpackModules(appCssContext);
application.loadAppCss();
require("./vendor-platform");
require("bundle-entry-points");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVuZG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMzQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUNsQyxJQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztBQUN0RixNQUFNLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDN0MsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBRXpCLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRTdCLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU25hcHNob3QgdGhlIH4vYXBwLmNzcyBhbmQgdGhlIHRoZW1lXG5jb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvblwiKTtcbnJlcXVpcmUoXCJ1aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuY29uc3QgYXBwQ3NzQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIn4vXCIsIGZhbHNlLCAvXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJC8pO1xuZ2xvYmFsLnJlZ2lzdGVyV2VicGFja01vZHVsZXMoYXBwQ3NzQ29udGV4dCk7XG5hcHBsaWNhdGlvbi5sb2FkQXBwQ3NzKCk7XG5cbnJlcXVpcmUoXCIuL3ZlbmRvci1wbGF0Zm9ybVwiKTtcblxucmVxdWlyZShcImJ1bmRsZS1lbnRyeS1wb2ludHNcIik7XG4iXX0=