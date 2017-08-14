module Api
  class TasksController < ApplicationController
    def index
      collection = Task.all
      render json: collection,
             root: false,
             each_serializer: TaskSerializer
    end
  end
end
