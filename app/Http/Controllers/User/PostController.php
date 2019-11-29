<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\User;
use App\User\Post;
use App\User\Post\Comment;
use App\User\Post\Like;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class PostController extends Controller
{

    /**
     * Store newly created post
     *
     * @param Request $request
     * @param $id
     * @return RedirectResponse
     */
    public function storePost(Request $request, $id)
    {
        try {
            $this->validate($request, [
                'post_content' => 'required|max:1000'
            ]);
        } catch (ValidationException $e) {
            return back()->withErrors(['1000 karakterden fazla içerik giremezsiniz.']);
        }

        $post = Post::create([
            'content' => $request->post_content,
            'user_id' => $id
        ]);

        return back()->with('success', 'Başarıyla eklendi');
    }

    /**
     * Follow new user
     *
     * @param $profileId
     * @return RedirectResponse
     */
    public function followUser($profileId)
    {
        $user = User::find($profileId);
        if (!$user) {
            return redirect()->back()->with('error', 'Böyle bir kullanıcı bulunmamakta.');
        }

        $user->followers()->attach(auth()->user()->id);
        return back()->with('success', 'Kullanıcı takip edildi');
    }

    /**
     * Unfollow user
     *
     * @param int $profileId
     * @return RedirectResponse
     */
    public function unFollowUser(int $profileId)
    {
        $user = User::find($profileId);
        if (!$user) {
            return redirect()->back()->with('error', 'Kullanıcı bulunamadı.');
        }
        $user->followers()->detach(auth()->user()->id);
        return back()->with('success', 'Kullanıcı takipten çıkıldı.');
    }

    public function listComments($postId)
    {
        $post = Post::find($postId);
        $comments = Post::find($postId)->comment()->orderBy('created_at', 'DESC')->paginate(10);

        return view('post.comment', ['post' => $post, 'comments' => $comments]);
    }

    public function storeComments(Request $request, $postId)
    {
        try {
            $this->validate($request, [
                'comment_content' => 'max:250|required'
            ]);
        } catch (ValidationException $e) {
            return back()->withErrors(['Yorumunuz eklenemedi.']);
        }

        Comment::create([
            'content' => $request->comment_content,
            'post_id' => $postId,
            'user_id' => Auth::user()->id
        ]);

        return back()->with('success', 'Yorumunuz başarıyla eklendi!');
    }

    public function like($postId)
    {
        $existing_like = Like::wherePostId($postId)->whereUserId(Auth::id())->first();

        if (is_null($existing_like)) {
            Like::create([
                'post_id' => $postId,
                'user_id' => Auth::user()->id
            ]);
        } else {
            if (is_null($existing_like->deleted_at)) {
                $existing_like->delete();
                return back()->withErrors(['Post beğenisi kaldırıldı!']);
            } else {
                $existing_like->restore();
            }
        }
        return back()->with('success', 'Post beğenildi.');
    }

    public function likes($postId)
    {
        $likes = Like::where('post_id', $postId)->get()->pluck(['user_id']);
        $users = User::whereIn('id', $likes)->get();
        return view('post.likes', ['users' => $users]);
    }
}
