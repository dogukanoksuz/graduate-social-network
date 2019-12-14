<div class="col-lg-2 mb-4">
    <div class="card">
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
        </ul>
    </div>
</div>
