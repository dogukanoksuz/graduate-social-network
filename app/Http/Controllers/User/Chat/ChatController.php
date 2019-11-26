<?php

namespace App\Http\Controllers\User\Chat;

use App\Http\Controllers\Controller;
use App\User;
use App\User\Chat\Chat;
use App\User\Chat\Message;
use Carbon\Carbon;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class ChatController extends Controller
{
    /**
     * Show the resource
     *
     * @return Factory|View
     */
    public function index()
    {
        $allChats = Chat::where('to', Auth::user()->id)->orWhere('from', Auth::user()->id)->orderBy('updated_at', 'DESC')->get();
        return view('chat.index', ['allChats' => $allChats, 'recipient' => Auth::user()]);
    }

    /**
     * Show chats and if not exists create a new chat
     *
     * @param $id
     * @return Factory|RedirectResponse|View
     */
    public function show($id)
    {
        if ((User::find($id) == null) || (Auth::user()->id == $id)) {
            return back()->withErrors(['Bu user ile mesajlaşamazsınız.']);
        }

        $allChats = Chat::where('to', Auth::user()->id)->orWhere('from', Auth::user()->id)->orderBy('updated_at', 'DESC')->get();
        $sendTo = User::where('id', $id)->first();
        $message = null;

        if (($chat = Chat::where('to', $id)->orWhere('from', $id)->first()) != null) {
            $message = Message::where('chat_id', $chat->id)->where('user_id', Auth::user()->id)->orWhere('user_id', $id)->orderBy('created_at', 'DESC')->get();
        } else {
            $chat = Chat::create([
                'from' => Auth::user()->id,
                'to' => $id
            ]);
        }

        return view('chat.show', ['id' => $id,
            'allChats' => $allChats,
            'chat' => $chat,
            'recipient' => $sendTo,
            'message' => $message]);
    }

    public function sendMessage(Request $request, $id)
    {
        $chat = Chat::where('to', $id)->orWhere('from', $id);

        $message = Message::create([
            'content' => $request->message_content,
            'user_id' => Auth::user()->id,
            'chat_id' => $chat->first()->id
        ]);

        $chat->update([
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);

        return back()->with('success', 'Özel mesajınız gönderilmiştir.');
    }
}
