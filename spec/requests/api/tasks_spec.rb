require 'rails_helper'

RSpec.describe "Tasks Controller", type: :request do
  let!(:task) { create(:task) }

  context 'when the order contains non-gift-card items' do
    let(:headers) {}

    context 'fetching tasks' do
      before do
        get "/api/tasks"
      end

      it { expect(response.code).to eq '200' }

      it {
          expect(response_body).to include(
            id: task.id,
            title: task.title,
            notes: task.notes,
            completed_at: nil,
            created_ts: task.created_at.to_i
          )
      }
    end

    context 'creating tasks' do
      before do
        post '/api/tasks', params: create_params
      end

      it { expect(response.code).to eq '201' }
    end

    context 'updating tasks' do
      before do
        put "/api/tasks/#{task.id}", params: { task: { completed_at: Time.now } }
      end

      it { expect(response.code).to eq '200' }
      it { expect(task.reload.completed_at).to_not be_nil }
    end

    context 'deleting tasks' do
      before do
        delete "/api/tasks/#{task.id}"
      end
      
      it { expect(response.code).to eq '200' }
      it { expect(Task.count).to be 0 }
    end

    def response_body
      JSON.parse(response.body, symbolize_names: true)
    end

    def create_params
      { task: { title: 'a sample task', notes: 'lorem' } }
    end
  end
end
