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
                        <div class="incoming-message">
                            <div class="incoming-message-img"><img
                                    src="https://ptetutorials.com/images/user-profile.png"
                                    alt="avatar"></div>
                            <div class="received-message">
                                <div class="received-withd-message">
                                    <p>Test which is a new approach to have all
                                        solutions</p>
                                    <span class="time-date"> 11:01 AM    |    June 9</span></div>
                            </div>
                        </div>
                        <div class="outgoing-message">
                            <div class="sent-message">
                                <p>Test which is a new approach to have all
                                    solutions</p>
                                <span class="time-date"> 11:01 AM    |    June 9</span></div>
                        </div>

                    </div>
                    <div class="p-2">
                        <div class="input-group">
                            <form action="{{ route('chat.store', $request->id) }}"></form>
                            <input type="text" class="form-control" name="message_content"
                                   placeholder="Mesajınızı yazınız...">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="submit"><i class="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-header" style="padding: 5px">
                        <div class="input-group">
                            <!--<a href="" class="btn btn-primary mr-2"><i class="fas fa-edit"></i></a>-->
                            <input type="text" class="form-control" name="chat" placeholder="Arama"
                                   style="border-radius: .325rem 0 0 .325rem">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="submit"><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="inbox-chat">
                        <div class="chat-list active-chat">
                            <div class="chat-people">
                                <div class="chat-img"><img src="https://ptetutorials.com/images/user-profile.png"
                                                           alt="avatar"></div>
                                <div class="chat-history">
                                    <h5>Doğukan Öksüz <span class="chat-date">Dec 25</span></h5>
                                    <p>Test, which is a new approach to have all solutions
                                        astrology under one roof.</p>
                                </div>
                            </div>
                        </div>
                        <div class="chat-list">
                            <div class="chat-people">
                                <div class="chat-img"><img src="https://ptetutorials.com/images/user-profile.png"
                                                           alt="avatar"></div>
                                <div class="chat-history">
                                    <h5>Doğukan Öksüz <span class="chat-date">Dec 25</span></h5>
                                    <p>Test, which is a new approach to have all solutions
                                        astrology under one roof.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
