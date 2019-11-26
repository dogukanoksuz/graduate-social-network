@extends('layouts.app')
@section('title')
    Mesajlar - {{ config('app.title', 'KTÜ Mezun') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="offset-4"></div>
            @include('chat.chatlist')
            <div class="offset-4"></div>
        </div>
    </div>
@endsection
