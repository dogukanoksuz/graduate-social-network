@extends('layouts.app')
@section('title')
    Bilgileri düzenle - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-3 ">
                <div class="list-group card">
                    <a href="{{ route('profile.edit', $user->id) }}"
                       class="list-group-item list-group-item-action"><i class="fas fa-user mr-2"></i>Profil
                        düzenle</a>
                    <a href="{{ route('profile.edit_details', $user->id) }}"
                       class="list-group-item list-group-item-action active"><i class="fas fa-user mr-2"></i>Bilgileri
                        düzenle</a>
                    <a href="{{ route('profile.show', $user->id) }}" class="list-group-item list-group-item-action"><i
                            class="fas fa-chevron-left mr-2"></i>Profile dön</a>
                </div>
            </div>
            <div class="col-md-9">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <h4>Bilgileri düzenle</h4>
                                <hr>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <form action="{{ route('profile.update_details', $user->id) }}" method="POST"
                                      enctype="multipart/form-data">
                                    @method('PUT')
                                    @csrf
                                    <div class="form-group row">
                                        <label for="tc_no" class="col-4 col-form-label">TC Kimlik Numaranız*</label>
                                        <div class="col-8">
                                            <input id="tc_no" name="tc_no" value="{{ $user->tc_no }}"
                                                   class="form-control here" required="required" type="text">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="phone_no" class="col-4 col-form-label">Telefon Numaranız*</label>
                                        <div class="col-8">
                                            <input id="phone_no" name="phone_no" value="{{ $user->phone_no }}"
                                                   class="form-control here" type="text">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="company" class="col-4 col-form-label">Şirket</label><br>
                                        <div class="col-8">
                                            <select name="company" id="company" class="custom-select">
                                                <option value="0" disabled selected>Şirket seçiniz</option>
                                                @foreach ($companies as $company)
                                                    <option value="{{ $company->id }}">{{ $company->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="position" class="col-4 col-form-label">Pozisyon</label><br>
                                        <div class="col-8">
                                            <select name="position" id="position" class="custom-select">
                                                <option value="0" disabled selected>Pozisyon seçiniz</option>
                                                @foreach ($positions as $position)
                                                    <option value="{{ $position->id }}">{{ $position->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="from"
                                               class="col-md-4 col-form-label">{{ __('Başlangıç Tarihiniz') }}</label>

                                        <div class="col-md-8 dateTimePicker1">
                                            <input id="from" type="text" class="form-control" name="from">
                                        </div>

                                    </div>
                                    <div class="form-group row">
                                        <label for="to"
                                               class="col-md-4 col-form-label">{{ __('Ayrılış Tarihiniz') }}</label>

                                        <div class="col-md-8 dateTimePicker2">
                                            <input id="to" type="text" class="form-control" name="to">
                                            <small>Halen işte çalışmaya devam ediyorsanız işaretlemeyiniz.</small>
                                        </div>

                                    </div>
                                    <div class="form-group row">
                                        <div class="offset-4 col-8">
                                            <button name="submit" type="submit" class="btn btn-primary">Bilgilerimi
                                                güncelle
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scriptContent')
    <script>
        $('#from').datepicker({
            calendarWeeks: true,
            autoclose: true,
            todayHighlight: true,
            container: '.dateTimePicker1'
        });
        $('#to').datepicker({
            calendarWeeks: true,
            autoclose: true,
            todayHighlight: true,
            container: '.dateTimePicker2'
        });
    </script>
@endsection
