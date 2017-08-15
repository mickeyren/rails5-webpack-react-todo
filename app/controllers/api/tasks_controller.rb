module Api
  class TasksController < ApplicationController
    before_action :load_task, only: :update

    def index
      collection = Task.all
      render json: collection,
             root: false,
             each_serializer: TaskSerializer
    end

    def create
      task = Task.create(task_params)

      if task.persisted?
        render json: task,
          root: false,
          serializer: TaskSerializer,
          status: :created
      else
        head :unprocessable_entity
      end
    end

    def update
      if @task.update_attributes(task_params)
        head :ok
      else
        head :unprocessable_entity
      end
    end

    private

    def task_params
      return {} unless params[:task]

      params.require(:task).permit(%i(title notes completed_at))
    end

    def load_task
      @task = Task.find(params[:id])
    end
  end
end
