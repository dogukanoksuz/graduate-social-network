<?php

namespace App\User;

use App\User;
use App\User\Post\Like;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Post extends Model
{
    protected $fillable = [
        'content', 'user_id', 'type'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comment()
    {
        return $this->hasMany(User\Post\Comment::class);
    }

    public function likes()
    {
        return $this->belongsToMany('App\User', 'likes');
    }

    public function isLikedByMe()
    {
        if (count(Like::where('user_id', Auth::user()->id)->where('post_id', $this->id)->get()) > 0) {
            return true;
        }
        return false;
    }

    public function getPostTypeInformation()
    {
        switch ($this->type) {
            case "work":
                return "<span class=\"ml-2 badge badge-success\">İş ilanı</span>";
            case "intern":
                return "<span class=\"ml-2 badge badge-info\">Staj ilanı</span>";
            default:
                return "";
        }
    }
}
