@php
    $workPosts = App\User\Post::where('type', 'work')->withCount('user')->orderBy('user_count', 'DESC')->take(1)->get()->first();
    $mostSharer = App\User::findOrFail($workPosts->user_id);
    $internPosts = App\User\Post::where('type', 'intern')->withCount('user')->orderBy('user_count', 'DESC')->take(1)->get()->first();
    $mostSharer_intern = App\User::findOrFail($workPosts->user_id);
@endphp

<div class="row">
    <div class="col-md-12 text-center mb-1">En çok iş ilanı paylaşımı:</div>
    <div class="col-md-12 justify-content-center align-items-center mb-3">

        <a href="{{ route('profile.show', $mostSharer->id) }}">
            <img src="{{ $mostSharer->profile_picture }}" alt="{{ $mostSharer->name }}" class="float-left mr-3"
                 style="width: 36px; border-radius: 36px">
            <span style="float: left;" class="mt-1">{{ $mostSharer->name }}</span>
        </a>
        @if (Auth::user()->isFollowing($mostSharer->id))
            <a href="{{ route('profile.unfollow', $mostSharer->id) }}" class="btn btn-primary btn-sm float-right"><i
                    class="fas fa-user-minus"></i></a>
        @else
            <a href="{{ route('profile.follow', $mostSharer->id) }}" class="btn btn-primary btn-sm float-right"><i
                    class="fas fa-user-plus"></i></a>
        @endif
    </div>
    <div class="col-md-12 text-center mb-1">En çok staj ilanı paylaşımı:</div>
    <div class="col-md-12 justify-content-center align-items-center mb-3">

        <a href="{{ route('profile.show', $mostSharer_intern->id) }}">
            <img src="{{ $mostSharer_intern->profile_picture }}" alt="{{ $mostSharer_intern->name }}"
                 class="float-left mr-3"
                 style="width: 36px; border-radius: 36px">
            <span style="float: left;" class="mt-1">{{ $mostSharer_intern->name }}</span>
        </a>
        @if (Auth::user()->isFollowing($mostSharer_intern->id))
            <a href="{{ route('profile.unfollow', $mostSharer_intern->id) }}"
               class="btn btn-primary btn-sm float-right"><i
                    class="fas fa-user-minus"></i></a>
        @else
            <a href="{{ route('profile.follow', $mostSharer_intern->id) }}"
               class="btn btn-primary btn-sm float-right"><i
                    class="fas fa-user-plus"></i></a>
        @endif
    </div>
</div>

