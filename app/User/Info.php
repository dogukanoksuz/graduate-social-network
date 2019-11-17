<?php

namespace App\User;

use Illuminate\Database\Eloquent\Model;

class Info extends Model
{
    protected $table = 'user_info';

    protected $fillable = [
        'type',
        'content'
    ];
}
