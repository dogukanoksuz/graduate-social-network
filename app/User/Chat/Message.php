<?php

namespace App\User\Chat;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        'chat_id',
        'content',
        'user_id'
    ];

    public function chat()
    {
        $this->belongsTo(Chat::class);
    }
}
