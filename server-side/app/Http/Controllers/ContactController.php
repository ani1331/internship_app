<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Rounting\Route;
use App\Contact;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::query()->get();
        return $contacts;

    }



    public function create()
    {
        return view('contacts.create');
    }


    public function store(Request $request)
    {
        $request->validate([
          'first_name'=>'required',
          'last_name'=>'required',
          'email'=>'required'
        ]);

//        $contact = new Contact([
//            'first_name'=> $request->get('first_name'),
//            'last_name'=> $request->get('last_name'),
//            'email'=> $request->get('email'),
//            'job_title'=> $request->get('job_title'),
//            'city' => $request->get('city'),
//            'country' => $request->get('country')
//        ]);
        $contact = new Contact();
        $contact->first_name = $request->get('first_name');
        $contact->last_name = $request->get('last_name');
        $contact->email = $request->get('email');
        $contact->job_title = $request->get('job_title');
        $contact->city = $request->get('city');
        $contact->country = $request->get('country');
        $contact->save();
//        return redirect('/contacts')->with('success','Contact saved!');
        return response()->json(
            ["status"=>"success"]
        );

    }


    public function show($id)
    {
        $model = Post::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => 'Post does not exist',
                'status' => 'fail',
            ]);
        }
        return $model;
    }


    public function edit($id)
    {

    }


    public function update(Request $request, $id)
    {
        $model = Post::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => 'Post does not exist',
                'status' => 'fail',
            ]);
        }
        $model->first_name = $request->get('first_name');
        $model->last_name = $request->get('last_name');
        $model->email = $request->get('email');
        $model->job_title = $request->get('job_title');
        $model->city = $request->get('city');
        $model->country = $request->get('country');
        $model->save();

        return response()->json([
            'message' => 'Post Updated Successfully',
            'status' => 'success',
        ]);
    }


    public function destroy($id)
    {
        $model = Post::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => 'Post does not exist',
                'status' => 'fail',
            ]);
        }
        $model->delete();
        return response()->json([
            'message' => 'Post Deleted Successfully',
            'status' => 'success',
        ]);
    }
}
