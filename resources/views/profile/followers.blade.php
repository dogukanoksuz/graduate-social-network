@extends('layouts.app')
@section('title')
    Takipçileriniz - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h4>Takipçileriniz</h4>
                <hr>
            </div>
            @foreach($users as $user)
                <div class="col-md-6 justify-content-center align-items-center mb-3">
                    <a href="{{ route('profile.show', $user->id) }}">
                        <img src="{{ $user->profile_picture }}" alt="{{ $user->name }}" class="float-left mr-3"
                             style="width: 36px; border-radius: 36px">
                        <span style="float: left;" class="mt-1">{{ $user->name }}</span>
                    </a>
                </div>
            @endforeach
        </div>
    </div>
@endsection
