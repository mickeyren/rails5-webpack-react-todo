module Api
  class TasksController < ApplicationController
    def index
      collection = Task.all
      render json: collection,
             root: false,
             each_serializer: TaskSerializer
    end

    def create
      task = Task.create(task_params)

      if task.persisted?
        head :created
      else
        head :unprocessable_entity
      end
    end

    private

    def task_params
      return {} unless params[:task]

      params.require(:task).permit([:title, :notes, :completed_at])\
    end
  end
end
