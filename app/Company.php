<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = [
        'name',
        'picture',
        'company_info',
        'address',
        'contact_info',
    ];

    public $timestamps = false;
}
