<?php

namespace App\Http\Controllers\User\Chat;

use App\Http\Controllers\Controller;
use App\User;
use App\User\Chat\Chat;
use App\User\Chat\Message;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return view('chat.index');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        if (User::find($id)->count() == 0) {
            abort(404);
        }

        if (Chat::where('from', Auth::user()->id)->where('to', $id)->count() == 0) {
            $chat = Chat::create([
                'from' => Auth::user()->id,
                'to' => $id
            ]);
        }

        if (isset($chat)) {
            $messages = $chat->message()->orderBy('created_at', 'DESC')->all();
        } else {
            return back()->withErrors(['Bi şeyler yanlış gitti']);
        }
        $recipient = User::where('id', $id)->first();
        return view('chat.show', ['chat' => $chat, 'messages' => $messages, 'user' => $recipient]);
    }

    public function storeMessage(Request $request, $id)
    {
        try {
            $this->validate($request, [
                'message_content' => 'required|max:255'
            ]);
        } catch (ValidationException $e) {
            back()->withErrors(['Mesaj yazmak zorunludur veya 255 karakteri geçmemelidir.']);
        }

        $message = Message::create([
            'content' => $request->message_content,
            'chat_id' => Chat::where('to', $id)->first()->id
        ]);

        return back()->withErrors(['Mesajınız gönderildi!']);
    }
}
