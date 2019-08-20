<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Rounting\Route;
use App\Contact;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::all();
        return $contacts;
    }

//    public function create()
//    {
////        return view('contacts.create');
//    }


    public function store(Request $request)
    {
        //echo "gffgfg"; exit;
        $request->validate([
          'first_name'=>'required',
          'last_name'=>'required',
          'email'=>'required'
        ]);

        $contact = new Contact([
            'first_name' => $request->get('first_name'),
            'last_name' => $request->get('last_name'),
            'email' => $request->get('email'),
//
        ]);

        $contact->save();
//        return redirect('/contacts')->with('success','Contact saved!');
        return response()->json(
            "row created successfully");
    }


    public function show($id)
    {
        $contact = Contact::find($id);
        if (!$contact) {
            return response()->json([
                'message' => 'Post does not exist',
                'status' => 'fail',
            ]);
        }
        return $contact;
    }


//    public function edit($id)
//    {
//
//    }


    public function update(Request $request, $id)
    {
        $data = $request->except(['_method']);

        $validator = Validator::make($data, [
            'first_name'=>'required',
            'last_name'=>'required',
            'email'=>'required|email'
        ]);

//        dd($validator->fails());

        // @TODO check validation

//        $contact = Contact::find($id);

//        if (!$contact) {
//            return response()->json([
//                'message' => 'Post does not exist',
//                'status' => 'fail',
//            ]);
//        }
//        $contact->first_name = $request->get('first_name');
//        $contact->last_name = $request->get('last_name');
//        $contact->email = $request->get('email');
//        $contact->job_title = $request->get('job_title');
//        $contact->city = $request->get('city');
//        $contact->country = $request->get('country');
//        $contact->save();
        $result = Contact::where('id', $id)->update($data);

        return response()->json([
            'message' => 'Contact Updated Successfully',
            'status' => 'success',
        ], 200);
    }


    public function destroy($id)
    {
        $contact = Contact::find($id);
        if (!$contact) {
            return response()->json([
                'message' => 'Post does not exist',
                'status' => 'fail',
            ]);
        }
        $contact->delete();
        return response()->json([
            'message' => 'Contacts Deleted Successfully',
            'status' => 'success',
        ]);
    }
}
