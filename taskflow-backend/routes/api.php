<?php

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;


// authentication routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});

// email verification routes
Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

// Email verification routes
Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
    return redirect('/email-verificado');
})->middleware(['auth', 'signed'])->name('verification.verify');

// Route to show email verification success page
Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
    return response()->json(['message' => 'Link de verificação enviado.']);
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

// task routes
Route::middleware('auth:sanctum', 'verified')->group(function () {
    Route::apiResource('tasks', TaskController::class);
});

// status route
Route::get('/status', function () {
    return response()->json(['message' => 'API conectada'], 200);
});

