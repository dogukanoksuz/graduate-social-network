@extends('layouts.app')
@section('title')
    Firmalar / Superuser - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            @include('superuser.nav')
            <div class="col-lg-10">
                <div class="card">
                    <div class="card-header">Firmalar</div>
                    <div class="card-body">
                        <table class="table table-borderless table-hover">
                            <thead class="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Yazı</th>
                                <th scope="col">Düzenle</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach ($companies as $company)
                                <tr>
                                    <th scope="row">{!! $company->id !!}</th>
                                    <td>{!! $company->name !!}</td>
                                    <td>
                                        <button class="btn btn-link"
                                                style="padding: 0; float: left; margin-right: 5px;"><a
                                                href="{{ route('company.edit', $company->id) }}"><i class="fas fa-edit"
                                                                                                    aria-hidden="true"></i>&nbsp;</a>
                                        </button>
                                        <form action="{{ route('company.destroy', $company->id) }}" method="POST"
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
                        {{ $companies->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
