<?php

namespace App\User\Chat;

use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    protected $fillable = [
        'from',
        'to'
    ];

    public function message()
    {
        $this->hasMany(Message::class);
    }
}
