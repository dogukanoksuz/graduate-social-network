<div class="col-lg-3 mb-4">
    <div class="card  mb-4">
        <div class="card-header">
            <i class="fas fa-edit"></i> Firmalar
            <button class="btn btn-link collapsed float-right btn-sm" data-toggle="collapse"
                    data-target="#postSettings" style="padding: 0; color: #5a6169">
                <i class="fas fa-chevron-down"></i>
            </button>
        </div>

        <ul class="list-group collapse" id="postSettings">
            <a href="{{ route('company.create') }}" style="color: #5a6169">
                <li class="list-group-item"><i class="fas fa-plus"></i> Yeni Firma Ekle</li>
            </a>
            <a href="{{ route('company.index') }}" style="color: #5a6169">
                <li class="list-group-item"><i class="fas fa-pencil-alt"></i> Firma Listesi</li>
            </a>

            <a href="{{ route('position.create') }}" style="color: #5a6169">
                <li class="list-group-item"><i class="fas fa-plus"></i> Yeni Pozisyon Ekle</li>
            </a>
            <a href="{{ route('position.index') }}" style="color: #5a6169">
                <li class="list-group-item"><i class="fas fa-pencil-alt"></i> Pozisyon Listesi</li>
            </a>
        </ul>
    </div>

    <div class="card">
        <a class="card-header" href="{{ route('superuser\systeminfo') }}" style=" color: #5a6169">
            <i class="fas fa-info-circle"></i> Sistem bilgileri
        </a>
    </div>
</div>
