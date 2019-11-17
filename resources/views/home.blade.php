@extends('layouts.app')
@section('title')
    Pano - {{ config('app.name') }}
@endsection

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Pano</div>

                <div class="card-body">
                    @if ( session('status') )
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    Başarıyla giriş yaptınız
                </div>
            </div>
        </div>
    </div>
</div>
@endsection