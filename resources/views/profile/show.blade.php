@extends('layouts.app')
@section('title')
    {{ $user->name }} - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <img src="https://semantic-ui.com/images/avatar2/large/elyse.png" class="card-img-top"
                         alt="{{ $user->name }}">
                    <div class="card-body text-center" style="padding: 15px">
                        <h5 class="card-title">{{ $user->name }}</h5>
                        <p class="card-text">Kullanıcı hakkında kısmı gelecek</p>
                        @if (Auth::user()->id === $user->id)
                            <a href="{{ route('profile.edit', $user->id) }}" class="btn btn-primary">Profili Düzenle</a>
                        @endif
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="card mb-5">
                    <div class="card-header">
                        <a href="{{ route('profile.show', $user->id) }}"><img
                                src="https://semantic-ui.com/images/avatar2/large/elyse.png" class="card-img-top"
                                alt="{{ $user->name }}" style="max-width: 36px; height: auto; border-radius: 36px;">
                            &nbsp; {{ $user->name }}</a>
                    </div>
                    <div class="card-body">
                        Paylaşım 1
                        Paylaşım 1
                        Paylaşım 1
                    </div>
                </div>

                <div class="card mb-5">
                    <div class="card-header">
                        <a href="{{ route('profile.show', $user->id) }}"><img
                                src="https://semantic-ui.com/images/avatar2/large/elyse.png" class="card-img-top"
                                alt="{{ $user->name }}" style="max-width: 36px; height: auto; border-radius: 36px;">
                            &nbsp; {{ $user->name }}</a>
                    </div>
                    <div class="card-body">
                        Paylaşım 1
                        Paylaşım 1
                        Paylaşım 1
                    </div>
                </div>

                <div class="card mb-5">
                    <div class="card-header">
                        <a href="{{ route('profile.show', $user->id) }}"><img
                                src="https://semantic-ui.com/images/avatar2/large/elyse.png" class="card-img-top"
                                alt="{{ $user->name }}" style="max-width: 36px; height: auto; border-radius: 36px;">
                            &nbsp; {{ $user->name }}</a>
                    </div>
                    <div class="card-body">
                        Paylaşım 1
                        Paylaşım 1
                        Paylaşım 1
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
