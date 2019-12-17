@extends('layouts.app')
@section('title')
    Pozisyon Düzenle / Superuser - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            @include('superuser.nav')
            <div class="col-lg-9">
                <div class="card">
                    <div class="card-header">Pozisyon Düzenle</div>
                    <div class="card-body">
                        <form action="{{ route('position.update', $position->id) }}" method="POST"
                              enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <div class="form-group row">
                                <label for="name" class="col-4 col-form-label">Pozisyon Adı</label>
                                <div class="col-8">
                                    <input id="name" name="name" value="{{ $position->name }}"
                                           class="form-control here" type="text">
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="offset-4 col-8">
                                    <button name="submit" type="submit" class="btn btn-primary">Pozisyon düzenle
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
