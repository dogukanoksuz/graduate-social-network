@extends('layouts.app')
@section('title')
    Firma Düzenle / Superuser - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            @include('superuser.nav')
            <div class="col-lg-10">
                <div class="card">
                    <div class="card-header">Firma Düzenle</div>
                    <div class="card-body">
                        <form action="{{ route('company.update', $company->id) }}" method="POST"
                              enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <div class="form-group row">
                                <label for="name" class="col-4 col-form-label">Firma Adı</label>
                                <div class="col-8">
                                    <input id="name" name="name" value="{{ $company->name }}"
                                           class="form-control here" type="text">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="logoFile" class="col-4 col-form-label">Şirket logosu</label>
                                <div class="col-8">
                                    <input type="file" class="form-control-file form-control"
                                           name="picture" id="logoFile" aria-describedby="fileHelp">
                                    <small id="fileHelp" class="form-text text-muted">Lütfen geçerli bir imaj
                                        dosyası yükleyin. İmaj dosyasının boyutu 2MB'yi geçmemelidir.</small>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="contact_info" class="col-4 col-form-label">İletişim Bilgileri</label>
                                <div class="col-8">
                                            <textarea id="contact_info" name="contact_info"
                                                      class="form-control here"
                                                      type="textarea">{{ $company->contact_info }}</textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="address" class="col-4 col-form-label">Adres</label>
                                <div class="col-8">
                                            <textarea id="address" name="address"
                                                      class="form-control here"
                                                      type="textarea">{{ $company->address }}</textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="company_info" class="col-4 col-form-label">Şirket Bilgileri</label>
                                <div class="col-8">
                                            <textarea id="company_info" name="company_info"
                                                      class="form-control here"
                                                      type="textarea">{{ $company->company_info }}</textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="offset-4 col-8">
                                    <button name="submit" type="submit" class="btn btn-primary">Şirket düzenle
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
