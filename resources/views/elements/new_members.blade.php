@php
    $users = App\User::orderBy('created_at', 'DESC')->limit(5)->get();
@endphp

@foreach ($users as $user)
    <div class="row">
        <div class="col-md-12 justify-content-center align-items-center mb-3">
            <a href="{{ route('profile.show', $user->id) }}">
                <img src="{{ $user->profile_picture }}" alt="{{ $user->name }}" class="float-left mr-3"
                     style="width: 36px; border-radius: 36px">
                <span style="float: left;" class="mt-1">{{ $user->name }}</span>
            </a>
            @if (Auth::user()->isFollowing($user->id))
                <a href="{{ route('profile.unfollow', $user->id) }}" class="btn btn-primary btn-sm float-right"><i
                        class="fas fa-user-minus"></i></a>
            @else
                <a href="{{ route('profile.follow', $user->id) }}" class="btn btn-primary btn-sm float-right"><i
                        class="fas fa-user-plus"></i></a>
            @endif
        </div>
    </div>
@endforeach
