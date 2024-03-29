<?php

namespace App;

use App\User\Post;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'profile_picture', 'about', 'graduation_date', 'tc_no', 'phone_no'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function post()
    {
        return $this->hasMany(Post::class);
    }

    public function followers()
    {
        return $this->belongsToMany(User::class, 'followers', 'leader_id', 'follower_id')->withTimestamps();
    }

    public function followings()
    {
        return $this->belongsToMany(User::class, 'followers', 'follower_id', 'leader_id')->withTimestamps();
    }

    public function isFollowing($id)
    {
        foreach ($this->followings()->get() as $followings) {
            if ($followings->id === $id)
                return true;
        }
        return false;
    }

    public function commment()
    {
        return $this->hasMany(Post\Comment::class);
    }

    public function likes()
    {
        return $this->belongsToMany('App\Post', 'likes', 'user_id', 'post_id');
    }

    public function company()
    {
        return $this->belongsToMany('App\Company', 'user_company_position', 'company_id', 'user_id');
    }

    public function position()
    {
        return $this->belongsToMany('App\Company\Position', 'user_company_position', 'position_id', 'user_id');
    }
}
