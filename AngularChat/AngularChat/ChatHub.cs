using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace AngularChat
{
    public class ChatHub : Hub
    {
        public Task Send(string message)
        {
            return Clients.All.SendAsync("Send", message);
        }
    }
}

