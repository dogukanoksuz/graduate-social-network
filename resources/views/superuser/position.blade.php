@extends('layouts.app')
@section('title')
    Pozisyonlar / Superuser - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            @include('superuser.nav')
            <div class="col-lg-9">
                <div class="card">
                    <div class="card-header">Pozisyonlar</div>
                    <div class="card-body">
                        <table class="table table-borderless table-hover">
                            <thead class="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Pozisyonlar</th>
                                <th scope="col">Düzenle</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach ($positions as $position)
                                <tr>
                                    <th scope="row">{!! $position->id !!}</th>
                                    <td>{!! $position->name !!}</td>
                                    <td>
                                        <button class="btn btn-link"
                                                style="padding: 0; float: left; margin-right: 5px;"><a
                                                href="{{ route('position.edit', $position->id) }}"><i
                                                    class="fas fa-edit"
                                                    aria-hidden="true"></i>&nbsp;</a>
                                        </button>
                                        <form action="{{ route('position.destroy', $position->id) }}" method="POST"
                                              onsubmit="confirm('Emin misiniz?')">
                                            @method('DELETE')
                                            @csrf
                                            <button class="btn btn-link" style="padding: 0; float: left;"><i
                                                    class="fas fa-times"
                                                    aria-hidden="true"></i>
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        {{ $positions->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
