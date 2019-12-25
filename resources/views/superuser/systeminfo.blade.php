@extends('layouts.app')
@section('title')
    Sistem Bilgileri / Superuser - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            @include('superuser.nav')
            <div class="col-lg-9">
                <div class="card">
                    <div class="card-header">Sistem Bilgileri</div>
                    <div class="card-body">
                        En uzun mezunları çalıştıran şirketler:<br>
                        <br>
                        En çok iş ilanı ve en çok staj ilanı veren mezunlar:<br>
                        <br>
                        En çok mezunun çalıştığı firma:<br>
                        <br>
                        Toplam mezun sayısı:<br>
                        {{ $info['user_count'] }}<br>
                        <br>
                        Toplam firma sayısı:<br>
                        {{ $info['company_count'] }}<br>
                        <br>
                        Hangi firmada ne kadar mezun çalışıyor?:<br>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
