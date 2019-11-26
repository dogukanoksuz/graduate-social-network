@extends('layouts.app')
@section('title')
    {{ $recipient->name }} mesajları - {{ config('app.title', 'KTÜ Mezun') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 mb-4">
                <div class="card">
                    <div class="card-header">
                        {{ $recipient->name }}
                    </div>
                    <div class="message-history p-4">
                        @if(!empty($message))
                            @foreach ($message as $msg)
                                @if($msg->user_id == Auth::user()->id)
                                    <div class="outgoing-message">
                                        <div class="sent-message">
                                            <p>{{ $msg->content }}</p>
                                            <span class="time-date">{{ $msg->created_at->isoFormat('LlL') }}</span>
                                        </div>
                                    </div>
                                @else
                                    <div class="incoming-message">
                                        <div class="incoming-message-img"><img
                                                src="{{ \App\User::where('id', $msg->user_id)->first()->profile_picture }}"
                                                alt="avatar"></div>
                                        <div class="received-message">
                                            <div class="received-withd-message">
                                                <p>{{ $msg->content }}</p>
                                                <span class="time-date">{{ $msg->created_at->isoFormat('LlL') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                @endif
                            @endforeach
                        @endif
                    </div>
                    <div class="p-2">
                        <form action="{{ route('chat.send', $recipient->id) }}" method="POST">
                            @csrf
                            <div class="input-group">
                                <input type="text" class="form-control" name="message_content"
                                       placeholder="Mesajınızı yazınız...">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="submit"><i class="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            @include('chat.chatlist')
        </div>
    </div>
@endsection
