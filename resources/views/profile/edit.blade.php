@extends('layouts.app')
@section('title')
    Profil düzenle - {{ config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-3 ">
                <div class="list-group card">
                    <a href="{{ route('profile.edit', $user->id) }}"
                       class="list-group-item list-group-item-action active"><i class="fas fa-user mr-2"></i>Profil
                        düzenle</a>
                    <a href="{{ route('profile.edit_details', $user->id) }}"
                       class="list-group-item list-group-item-action"><i class="fas fa-user mr-2"></i>Bilgileri
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
                                <h4>Profiliniz</h4>
                                <hr>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <form action="{{ route('profile.update', $user->id) }}" method="POST"
                                      enctype="multipart/form-data">
                                    @method('PUT')
                                    @csrf
                                    <div class="form-group row">
                                        <label for="email" class="col-4 col-form-label">E-posta*</label>
                                        <div class="col-8">
                                            <input id="email" name="email" value="{{ $user->email }}"
                                                   class="form-control here" required="required" type="text">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="name" class="col-4 col-form-label">Adınız*</label>
                                        <div class="col-8">
                                            <input id="name" name="name" value="{{ $user->name }}"
                                                   class="form-control here" type="text">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="password" class="col-4 col-form-label">Yeni şifreniz</label>
                                        <div class="col-8">
                                            <input id="password" name="password" placeholder="Yeni şifreniz"
                                                   class="form-control here" type="password">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="avatarFile" class="col-4 col-form-label">Profil resmi yükle</label>
                                        <div class="col-8">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input"
                                                       name="profile_picture" id="avatarFile"
                                                       aria-describedby="fileHelp">
                                                <label class="custom-file-label" for="avatarFile">Dosya seç <i
                                                        class="fas fa-upload"></i></label>
                                            </div>
                                            <small id="fileHelp" class="form-text text-muted">Lütfen geçerli bir imaj
                                                dosyası yükleyin. İmaj dosyasının boyutu 2MB'yi geçmemelidir.</small>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="about" class="col-4 col-form-label">Biyografi</label>
                                        <div class="col-8">
                                            <textarea id="about" name="about"
                                                      class="form-control here"
                                                      type="textarea">{{ $user->about }}</textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="offset-4 col-8">
                                            <button name="submit" type="submit" class="btn btn-primary">Profilimi
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
