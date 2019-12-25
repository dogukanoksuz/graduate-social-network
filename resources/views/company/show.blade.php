@extends('layouts.app')
@section('title')
    {{ $company->name }} firması - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12 mb-5">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-5">
                                <img src="{{ $company->picture }}" alt="{{ $company->name }}">
                            </div>
                            <div class="col-md-7">
                                <h3>{{ $company->name }}</h3>
                                <hr>
                                Şirket hakkında:<br>
                                {{ $company->company_info }}
                                <br><br>
                                Şirket iletişim bilgileri:<br>
                                {{ $company->contact_info }}
                                <br><br>
                                Şirket adresi:<br>
                                {{ $company->address }}
                                <br><br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h3>Şirket çalışanları</h3>
                        <hr>
                        <div class="row">
                            @foreach($employees as $user)
                                <div class="col-md-4 justify-content-center align-items-center mb-3">
                                    <a href="{{ route('profile.show', $user->id) }}">
                                        <img src="{{ $user->profile_picture }}" alt="{{ $user->name }}"
                                             class="float-left mr-3"
                                             style="width: 36px; border-radius: 36px">
                                        <span style="float: left;" class="mt-1">{{ $user->name }} <span
                                                class="badge badge-success badge-pill">{{ $user->position()->first()->name }}</span></span>
                                    </a>


                                    @if (Auth::user()->isFollowing($user->id))
                                        <a href="{{ route('profile.unfollow', $user->id) }}"
                                           class="btn btn-primary btn-sm float-right"><i
                                                class="fas fa-user-minus"></i></a>
                                    @else
                                        <a href="{{ route('profile.follow', $user->id) }}"
                                           class="btn btn-primary btn-sm float-right"><i
                                                class="fas fa-user-plus"></i></a>
                                    @endif
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
@endsection
