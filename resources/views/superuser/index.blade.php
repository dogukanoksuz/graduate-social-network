@extends('layouts.app')
@section('title')
    Superuser - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            @include('superuser.nav')
            <div class="col-lg-10">
                <div class="card">
                    <div class="card-header">Hoşgeldiniz</div>
                    <div class="card-body">
                        N.E.T. Code mezun sosyal ağ sistemi yönetim paneline hoşgeldiniz. Sol menüden seçeneklere göz
                        atabilirsiniz.<br>
                        Eklenmesini istediğiniz özellikler için me@dogukan.dev adresine mail atabilirsiniz.
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
