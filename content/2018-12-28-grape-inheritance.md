---
title: How to implement inheritance in Grape resources?
tags: ruby, grape
date: 2018-12-28
description: How to hack Grape resources by impelemting inheritance
---

Grape uses specific DSL to define endpoints in API, that’s why you can’t use base class’ instance methods in descendant resources. But there’s one trick:

There’s an `#inherited` class method in Ruby which is triggered every time some class inherits from ancestor class. It passes one argument - descendant class. Calling descendant’s #instance_eval method we can place any useful stuff inside a block: methods, helpers, before-do’s, etc, in this way evaluating it in context of subclass.

```ruby
class Base < Grape::API
  def self.inherited(subclass)
    super

    subclass.instance_eval do
      helpers do
        def current_user
          @current_user ||= User.find(params[:user_id])
        end
      end
      # ...
    end
  end
end

class DocumentsResource < Base
  post '/documents' do
    @document = current_user.documents.build
    # ...
  end
end
```

Note that it’s not real inheritance because Base class has not methods defined inside subclass#instance_eval block.
