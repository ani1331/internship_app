<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use App\Contact;

class ContactController extends Controller
{

    /**
     * @return array
     */
    public function index()
    {
        return User::all()->toArray();
    }

//    public function create()
//    {
////        return view('contacts.create');
//    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required'
        ]);

        $contact = new User([
            'first_name' => $request->get('first_name'),
            'last_name' => $request->get('last_name'),
            'email' => $request->get('email'),
        ]);

        $contact->save();

        return response()->json("row created successfully", 200);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $contact = User::find($id);
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

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $data = $request->except(['_method']);

//        $validator = Validator::make($data, [
//            'first_name'=>'required',
//            'last_name'=>'required',
//            'email'=>'required|email'
//        ]);

//        dd($validator->fails());

        $result = User::where('id', $id)->update($data);

        return response()->json([
            'message' => 'Contact Updated Successfully',
            'status' => $result ? 'success' : 'failed',
        ], 200);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $contact = User::find($id);
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
