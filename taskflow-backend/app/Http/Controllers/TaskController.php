<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    // List all tasks for the authenticated user
    public function index()
    {
        $user = Auth::user();

        $tasks = Task::where('user_id', $user->id)->get();
        return response()->json($tasks);
    }

    // Store a new task
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|string|in:pendente,em andamento,concluída',
        ]);

        $task = Task::create([
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status,
            'user_id' => Auth::id(),
        ]);

        return response()->json($task, 201);
    }

    // Show a specific task
    public function show(string $id)
    {
        $task = Task::where('id', $id)
            ->where('user_id', Auth::id())
            ->first();

        if (!$task) {
            return response()->json(['message' => 'Tarefa não encontrada'], 404);
        }

        return response()->json($task);
    }

    // Update a specific task
    public function update(Request $request, string $id)
    {
        $task = Task::where('id', $id)
            ->where('user_id', Auth::id())
            ->first();

        if (!$task) {
            return response()->json(['message' => 'Tarefa não encontrada'], 404);
        }

        $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'status' => 'sometimes|string|in:pendente,em andamento,concluída',
        ]);

        $task->update($request->only(['title', 'description', 'status']));

        return response()->json($task);
    }

    // Delete a specific task
    public function destroy(string $id)
    {
        $task = Task::where('id', $id)
            ->where('user_id', Auth::id())
            ->first();

        if (!$task) {
            return response()->json(['message' => 'task not found'], 404);
        }

        $task->delete();

        return response()->json(['message' => 'Task deleted successfully'], 200);
    }
}
