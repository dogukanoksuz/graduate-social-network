<?php

namespace App\User;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'content', 'user_id'
    ];
}
