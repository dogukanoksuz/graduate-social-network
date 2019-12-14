@extends('layouts.app')
@section('title')
    Firmalar - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            @foreach($companies as $company)
                <a href="{{ route('company.edit', $company->id) }}">
                    <div class="col-md-4">
                        <div class="card">
                            <img src="{{ $company->picture }}" class="card-img-top"
                                 alt="{{ $company->name }}">
                            <div class="card-body text-center" style="padding: 15px">
                                <h5 class="card-title">{{ $company->name }}</h5>
                            </div>
                        </div>
                    </div>
                </a>
            @endforeach
            {{ $companies->links() }}
        </div>
    </div>
@endsection
