@extends('layouts.app')
@section('title')
    Firmalar - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            @foreach($companies as $company)
                <div class="col-md-3 mb-3">
                    <a href="{{ route('companies.show', $company->id) }}">
                        <div class="card">
                            <img src="{{ $company->picture }}" class="card-img-top"
                                 alt="{{ $company->name }}">
                            <div class="card-body text-center" style="padding: 15px">
                                <h5 class="card-title">{{ $company->name }}</h5>
                                {{ $company->about }}
                            </div>
                        </div>
                    </a>
                </div>
            @endforeach
            {{ $companies->links() }}
        </div>
    </div>
@endsection
