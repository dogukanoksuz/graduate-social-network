<?php

namespace App\Company;

use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    protected $fillable = [
        'name'
    ];

    public $timestamps = false;
}
