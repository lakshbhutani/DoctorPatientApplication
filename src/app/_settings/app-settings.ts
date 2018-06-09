export class AppSettings{

  // public static API_ENDPOINT = "https://orodoc.herokuapp.com";
  public static API_ENDPOINT = "http://assignment.orodoc.com";

  public static API_ENDPOINT_USER_CREATE = AppSettings.API_ENDPOINT + "/api/user/create";
  public static API_ENDPOINT_USER_LOGIN = AppSettings.API_ENDPOINT + "/api/user/login";

  public static API_ENDPOINT_GET_USERS = AppSettings.API_ENDPOINT + "/api/users/";  //PASS ROLE AFTER THE URL
  public static API_ENDPOINT_REQUEST_ACCESS = AppSettings.API_ENDPOINT + "/api/user/request";

  // GET REQUESTS AND APPROVE OR DENY REQUESTED PENDING
  public static API_ENDPOINT_GET_REQUEST_STATUS = AppSettings.API_ENDPOINT + "/api/user/requests";
  public static API_ENDPOINT_APPROVE_OR_DENY_PERMISSION_REQUEST = AppSettings.API_ENDPOINT + "/api/user/request"
}
