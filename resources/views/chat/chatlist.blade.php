<div class="col-md-4 mb-4">
    <div class="card">
        <div class="card-header" style="padding: 5px">
            <div class="input-group">
                <!--<a href="" class="btn btn-primary mr-2"><i class="fas fa-edit"></i></a>-->
                <input type="text" class="form-control" name="chat" placeholder="Arama"
                       style="border-radius: .325rem 0 0 .325rem">
                <div class="input-group-append">
                    <button class="btn btn-primary" type="submit"><i class="fas fa-search"></i></button>
                </div>
            </div>
        </div>
        <div class="inbox-chat">
            @foreach ($allChats as $oneChat)
                @php
                    $isfrom = $oneChat->to;
                @endphp
                @if ($oneChat->from != Auth::user()->id)
                    @php
                        $isfrom = $oneChat->from;
                    @endphp
                @endif
                <a href="{{ route('chat.show', $isfrom) }}"
                   class="chat-list @if($recipient->id == $isfrom) active-chat @endif">
                    <div class="chat-people">
                        <div class="chat-img"><img src="{{\App\User::where('id', $isfrom)->first()->profile_picture}}"
                                                   alt="avatar"></div>
                        <div class="chat-history">
                            <h5>
                                {{ \App\User::where('id', $isfrom)->first()->name }}
                                <span class="chat-date">{{ $oneChat->updated_at->isoFormat('LlL') }}</span>
                            </h5>
                            @php
                                $latestMessage = \App\User\Chat\Message::where('chat_id', $oneChat->id)->orderBy('created_at', 'DESC')->first();
                            @endphp
                            <p>@if($latestMessage !== null) {{ $latestMessage->content }} @endif</p>
                        </div>
                    </div>
                </a>
            @endforeach
        </div>
    </div>
</div>
